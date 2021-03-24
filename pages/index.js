import Head from 'next/head'
import styles from '../styles/Home.module.css'

import TopBar from '../components/topbar/topbar'

import { Box } from '@chakra-ui/react'
import NewestVideo from '../components/newest-video/newest-video'

const CHANNEL_ID = "UC94DrDp_sU68e2nol9-sJJg";
const YOUTUBE_API="https://www.googleapis.com/youtube/v3/search"

export async function getStaticProps() {
  const res = await fetch(`${YOUTUBE_API}?key=${process.env.YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`)
  const data = await res.json()
  const videos = await data.items
  
  return {
    props: {
      videos
    }
  }
}

export default function Home({ videos }) {
  return (
    <> 
      <TopBar />
      <Box display="flex" flexDirection="column" alignItems="center">
        <NewestVideo video={videos[0]} />
      </Box>
    </>
  )
}
