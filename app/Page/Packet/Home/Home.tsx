import React, { useState } from 'react'
import './Home.scss'
import image1 from './Image/image1.png'
import image2 from './Image/image2.png'
import image3 from './Image/image3.png'
import image4 from './Image/image4.png'
import image5 from './Image/Rectangle75.png'
import image6 from './Image/Rectangle74.png'
function Home() {

  const [show, setShow] = useState<number | null>(null);
  const contentShow = [
    { title: 'Floral', content: 'The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.', id: 1 },
    { title: 'Decor selection', content: 'The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.', id: 2 },
    { title: 'Hair & makeup', content: 'The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.', id: 3 },
    { title: 'Lighting & Sound', content: 'The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.', id: 4 },
  ]
  const data = [
    {
      title: 'Vinyasa Flow Yoga', description: 'Our aim is to share yoga knowledge with the students and help them relax', price: '$245', priceSale: '$200', week: [
        { title: 'WEEK 1', content: 'Get started & balance' },
        { title: 'WEEK 2', content: 'Focus on the mind' },
        { title: 'WEEK 3', content: 'Head relax yoga' },

      ],
      image: <img src={image1.src} />

    },
    {
      title: 'Vinyasa Flow Yoga', description: 'Our aim is to share yoga knowledge with the students and help them relax', price: '$245', priceSale: '$200', week: [
        { title: 'WEEK 1', content: 'Get started & balance' },
        { title: 'WEEK 2', content: 'Focus on the mind' },
        { title: 'WEEK 3', content: 'Head relax yoga' },

      ],
      image: <img src={image2.src} />

    },
    {
      title: 'Vinyasa Flow Yoga', description: 'Our aim is to share yoga knowledge with the students and help them relax', price: '$245', priceSale: '$200', week: [
        { title: 'WEEK 1', content: 'Get started & balance' },
        { title: 'WEEK 2', content: 'Focus on the mind' },
        { title: 'WEEK 3', content: 'Head relax yoga' },

      ],
      image: <img src={image3.src} />

    },
    {
      title: 'Vinyasa Flow Yoga', description: 'Our aim is to share yoga knowledge with the students and help them relax', price: '$245', priceSale: '$200', week: [
        { title: 'WEEK 1', content: 'Get started & balance' },
        { title: 'WEEK 2', content: 'Focus on the mind' },
        { title: 'WEEK 3', content: 'Head relax yoga' },

      ],
      image: <img src={image4.src} />

    },
  ]
  const handleShow = (item: number) => {
    setShow(item)
    if (show === item) {
      setShow(null)
    }
  }
  return (
    <>
      <div className='PMDVHFHZJZ'>
        <div className='XASPCYJNZP'>
          <div className='YHQJUYLGOT'>
            <div className='BSQFMBAJJW'>
              Online Courses
            </div>
            <div className='ZCEIKVWGWW'>
              Be yourself at our center, a place where you can encounter the body, mind and spirt balancing and merging them into oneness.
            </div>
          </div>
          <div className='VGCMAVRKCI'>
            {data?.map((item) => {
              return (
                <div className='OFHVVTMVAW'>
                  <div className='MYOMKDVFYT'>
                    {item?.image}
                  </div>
                  <div className='WMXARBHMJP'>
                    <div className='NXXWNPHOJT'>
                      {item?.title}
                    </div>
                    <div className='RHYTEOOWZO'>
                      {item?.description}
                    </div>
                    <div className='VWVJCPMQJI'>
                      <div className='VUDKZBWKZH'>
                        {item?.price}
                      </div>
                      <div className='TPKJCHRYQI'>
                        {item?.priceSale}
                      </div>
                    </div>
                  </div>
                  {item?.week?.map((item2) => {
                    return (
                      <div className='FUYEYYKZSX'>
                        <div className='WYKXUSNFXP'>
                          {item2?.title}
                        </div>
                        <div className='AHGFTZDYBX'>
                          {item2?.content}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Service/ Collapsible content 2 */}
      <div className='GTXTUPATAL'>
        <div className='MSRZSRMQXU'>
          Floral & Decor
        </div>
        <div className='MJGZUCVFOR'>
          <div className='TDJSQCFBDG'>
            <img src={image5.src} />
            {contentShow?.map((item) => {
              return (
                <div className='LANUMKFBEY'>
                  <div onClick={() => handleShow(item?.id)} className='DNQYLWMVLS'>
                    <div className='NJJXANGPPW'>
                      {item?.title}
                    </div>
                    <div className='NJJXANGPPW'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#693521" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {show === item?.id ? <div className='KMSQEAVCYS'>
                    {item?.content}
                  </div> : null}
                </div>
              )
            })}
          </div>
          <div className='IJXJAPAFQV'>
            <img src={image6.src} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home