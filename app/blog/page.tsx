import BlogAds from '@/components/shared/blog-ads'
import BreadCrumps from '@/components/shared/breadCrumps'
import Hero from '@/components/shared/Hero'
import LastPostList from '@/components/shared/last-post-list'
import React from 'react'
import { handleGetBlog } from '../actions/getAll'

export default async function BlogPage() {
 const res = await handleGetBlog()

  return (
    <div>
      <BreadCrumps/>
      <div className="mt-12"/>
      <Hero/>
      <div className="mt-12"/>
      <LastPostList data={res.Blogs}/>
      <div className="mt-12"/>
      <BlogAds/>
    </div>
  )
}
