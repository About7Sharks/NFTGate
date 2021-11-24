import {
  Box,
  Center,
  Container,
  Text,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";

// Polygon only
const injectedConnector = new InjectedConnector({ supportedChainIds: [137] });

const MEMBERSHIP_NFT_CONTRACT_ADDRESS =
  "0x527a5e544632a12b2bbca8f3e0aeaf3de599e95c";
const MEMBERSHIP_NFT_TOKEN_ID = "5";
const MEMBERSHIP_NFT_TOKEN_COUNT = 1;
const OPENSEA_LINK =
  "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/47609522723514433734824687530042294980736405256883231083500050416333544751304";

/**
 * A React hook that can be used to determine membership status of the connected wallet
 * @returns true, if connected wallet owns the NFT.
 */
const useWalletMembershipAccess = () => {
  const [access, setAccess] = useState(false);
  const { account, library } = useWeb3React();

  async function checkWalletMembership() {
    // get the connected wallet as a signer
    const signer = library.getSigner(account);

    /*
      Our SDK takes in a valid Signer or Provider.
      A signer can perform READ and WRITE calls on the blockchain.
      A provider can only perform READ calls on the blockchain.
      Read more: https://docs.ethers.io/v5/api/signer
      */
    const module = new ThirdwebSDK(signer).getCollectionModule(
      MEMBERSHIP_NFT_CONTRACT_ADDRESS
    );
    // check connceted wallet balance of the token
    const balance = await module.getOwned(account || '')
   return console.log(balance)
    // if (balance.toNumber() >= MEMBERSHIP_NFT_TOKEN_COUNT) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  if (library && account) {
    // Check wallet for membership nft then update the state.
    checkWalletMembership().then(setAccess);
  } else {
    // Reset access state if account is disconnected.
    if (access) {
      setAccess(false);
    }
  }

  return access;
};

const Home: NextPage = () => {
  const router = useRouter();
  const { account, library, activate } = useWeb3React();
  const hasMembershipAccess = useWalletMembershipAccess();

  /* This method uses server-side to validate that the wallet has the required NFT. */
  const enterMemberLounge = useCallback(async () => {
    if (library && account) {
      // Note: request for nonce (one-time use code) to prevent signature reply attack
      const reqAccess = await fetch("/api/request_access");
      const reqAccessResp = await reqAccess.json();

      // Get the connected wallet Signer
      const signer = library.getSigner(account);
      // Signature is used to authenticate the wallet address on the server-side.
      const signature = await signer.signMessage(
        `I want to enter the lounge. There may be sensitive content, use one-time access code: ${reqAccessResp.nonce}`
      );

      // Redirect to the lounge page with signature, so that the server side can recover
      // the wallet address who signed the message, then check the balance of the
      // Membership NFT of that wallet to determine if wallet can access the gated content.
      router.push(`/lounge?signature=${signature}`);
    }
  }, [router, library, account]);

  return (
    <Container>
      <Head>
        <title>Web 3 Gated site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*  */}
      <Center flexDirection="column">
        <Heading> NFT Member's Only Lounge</Heading><br />
        <Text>
          1 Membership NFT is needed in order to access the lounge.
        </Text>
        <iframe src="https://giphy.com/embed/QMou31nZSbjoY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sitting-tabby-chairsitting-QMou31nZSbjoY">via GIPHY</a></p>
        <br />
        <Text mt={4} textAlign="center">
          <Text as="span">NFT address </Text>
          <Text fontWeight="bold" as="span">
            {MEMBERSHIP_NFT_CONTRACT_ADDRESS}{" "}
          </Text>
        </Text>

        <Link mt={4} href={OPENSEA_LINK} color="blue" isExternal>
          View NFT on OpenSea
        </Link>
      </Center>

      {/* Setup wallet connect button and enter lounge button if wallet is connected.  */}
      <Box mt={20} textAlign="center">
        {account ? (
          <>
            <Text>Wallet: {account}</Text>
            <Text mt={4}>
              Do you have access to the member only lounge?{" "}
              <Button onClick={() => enterMemberLounge()}>
                Attempt to Enter Private Lounge
              </Button>
            </Text>
          </>
        ) : (
          <Button onClick={() => activate(injectedConnector)}>
            Connect Wallet (Polygon only)
          </Button>
        )}
      </Box>

      {/* This method uses client-side to conditionally display information based off
          membership nft in the connected wallet */}
      {hasMembershipAccess ? (
        <Center mt={8}>
          <Text textAlign="center">
            Only member can see this: 
            <Link color="blue" href='https://twitter.com/0xAlena'>Twitter 🐦</Link>
            
          </Text>
        </Center>
      ) : null}

      {router.query.denied ? (
        <Text color="red" textAlign="center" mt={8}>
          Access Denied{" "}
        </Text>
      ) : null}
    </Container>
  );
};

export default Home;
