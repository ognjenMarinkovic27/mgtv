import React from "react"
import PropTypes from "prop-types"
import { AspectRatio, Box } from '@chakra-ui/react'

const YoutubeEmbed = ({ embedId }) => (
  <Box>
    <AspectRatio w={[320,400,560,800,800]} ratio={16 / 9}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </AspectRatio>
  </Box>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed
