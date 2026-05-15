import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-10 px-6">

  {/* TOP HEADINGS */}
  <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-6">

    <p className="font-bold">COMPANY</p>
    <p className="font-bold">CUISINES NEAR YOU</p>
    <p className="font-bold">POPULAR</p>

  </div>

  {/* LINKS SECTION */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">

    <div>
      <p>customers</p>
      <p>vendors</p>
      <p>riders</p>
      <p>Ads</p>
      <p>store front</p>
      <p>Documentation</p>
      <p>Abouts</p>
      <p>careers</p>
      <p>FAQS</p>
      <p>Blog</p>
    </div>

    <div>
      <p>pasta near me</p>
      <p>rice near me</p>
      <p>fast food near me</p>
      <p>Asian food in lagos</p>
      <p>African food in lagos</p>
      <p>breakfast menu in lagos</p>
      <p>fitfam store in lagos</p>
      <p>American food in lagos</p>
      <p>pastries in lagos</p>
      <p>salad in lagos</p>
    </div>

    <div>
      <p>food delivery</p>
      <p>surulere</p>
      <p>ogudu</p>
      <p>yaba</p>
      <p>ikeja</p>
      <p>lekki</p>
      <p>king glab</p>
      <p>koredo spaghetti</p>
      <p>iyan Aladuke</p>
      <p>food fusion</p>
    </div>

  </div>

  {/* SOCIAL LINKS */}
  <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 text-lg">
    <p>Twitter</p>
    <p>Instagram</p>
    <p>Facebook</p>
    <p>LinkedIn</p>
  </div>

</div>
    </div>
  )
}

export default Footer
