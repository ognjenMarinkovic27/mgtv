import Head from 'next/head'
import styles from '../styles/Home.module.css'

import TopBar from '../components/topbar/topbar'

import { Box } from '@chakra-ui/react'
import NewestVideo from '../components/newest-video/newest-video'
import OtherVideos from '../components/other-videos/other-videos'

const PLAYLIST_ID = "UU94DrDp_sU68e2nol9-sJJg";
const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/playlistItems"

export async function getStaticProps() {
  const res = await fetch(`${YOUTUBE_API}?part=snippet%2CcontentDetails&maxResults=4&playlistId=${PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`)
  console.log(res)
  const data = await res.json
  const videos = await data.items ? data.items : []
  
  console.log(`${YOUTUBE_API}?key=${process.env.YOUTUBE_API_KEY}&part=snippet%2CcontentDetails&maxResults=50&playlistId=${PLAYLIST_ID}`)
  
  return {
    props: {
      videos
    }
  }
}

export default function Home({ videos }) {

  const newestVideo = videos.shift()
  const otherVideos = videos

  return (
    <> 
      <TopBar />
      <Box display="flex" flexDirection="column" alignItems="center">
        <NewestVideo video={newestVideo} />
        <OtherVideos videos={otherVideos} />
      </Box>
    </>
  )
}
