import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
// src
import loaderVideo from 'src/assets/video/logo-animated-compressed.mp4'
import logoText from 'src/assets/photo/logo_monochrome_transparent_text.png'

export const PageLoaderV2 = () => {
  return (
    <Stack
      sx={{
        height: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        component='video'
        poster={loaderVideo || undefined}
        autoPlay
        playsInline
        loop
        muted
        sx={{ width: 300 }}
      >
        {loaderVideo && <source src={loaderVideo} />}
      </Box>

      <Box
        component='img'
        src={logoText}
        sx={{
          ml: 2,
          width: 300
        }}
      />
    </Stack>
  )
}