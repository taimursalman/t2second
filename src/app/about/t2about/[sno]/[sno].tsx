import { useRouter } from 'next/router';
import React, { ReactElement } from 'react'

const Post = (): ReactElement => {
    const router = useRouter();
    const {sno } = router.query;


  return (
    <div>Test: {sno}</div>
  )
}

export default Post;