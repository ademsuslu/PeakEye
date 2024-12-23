import React from 'react'
import { handleGetNewsletter } from '../actions/getAll'

export default async function PagesPage() {
 const res= await handleGetNewsletter()

 console.log(res)
  return (
    <div>PagesPage</div>
  )
}
