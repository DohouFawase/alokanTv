import React from 'react'
import Card from '../../ui/card/card'

export default function Blog() {
  return (
    <div>
      <div className="px-8">
        <div className="">
            <div className="">
                <h1>Blog</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <Card image={"/alokan.jpeg"}  author={'Segla Seto'}  date={'23-00-2000'} title={'Alokan'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi similique, pariatur exercitationem deserunt dignissimos debitis iusto nihil repellat quidem. '}  />
            <Card image={"/alokan.jpeg"}  author={'Segla Seto'}  date={'23-00-2000'} title={'Alokan'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi similique, pariatur exercitationem deserunt dignissimos debitis iusto nihil repellat quidem. '}  />
            <Card image={"/alokan.jpeg"}  author={'Segla Seto'}  date={'23-00-2000'} title={'Alokan'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi similique, pariatur exercitationem deserunt dignissimos debitis iusto nihil repellat quidem. '}  />
            {/* <Card image={"/alokan.jpeg"}  author={'Segla Seto'}  date={'23-00-2000'} title={'Alokan'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi similique, pariatur exercitationem deserunt dignissimos debitis iusto nihil repellat quidem. '}  /> */}
            </div>
        </div>
      </div>
    </div>
  )
}
