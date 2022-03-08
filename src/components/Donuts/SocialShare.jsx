import React from 'react'
import {useParams, useLocation} from 'react-router-dom'

import {
    FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton,PinterestIcon,   PinterestShareButton
    } from "react-share";
    
const SocialShare = ({imageURL}) => {
    const location = useLocation();
    const shareUrl = location.pathname
  return (
    <>
    <div className="d-flex flex-row">
    <FacebookShareButton url={shareUrl}>
<FacebookIcon size={40} round={true} />
</FacebookShareButton>
<div className="mx-2">
<TwitterShareButton url={shareUrl}>
<TwitterIcon size={40}  round={true} />
</TwitterShareButton></div>

<div className="mx-2">
<PinterestShareButton url={shareUrl} media={imageURL}>
<PinterestIcon size={40} round={true} />
</PinterestShareButton></div>
    
    </div>
    
    </>
  )
}

export default SocialShare