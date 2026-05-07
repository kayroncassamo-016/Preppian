import Product_Hunt from '@/images/product-hunt.png'
import forbes from '@/images/forbes.png'
import businessInsider from '@/images/business-insider.png'
import udacity from '@/images/udacity.png'

import Image from 'next/image'

export const SocialProof =() =>
{
    const images =
    [
        {
            name:'Product Hunt',
            url: Product_Hunt
        },
        {
            name:'forbes',
            url:forbes,
        },
        {
            name:'business-insider',
            url:businessInsider
        },
        // {
        //     name:'udacity',
        //     url:udacity
        // }
    ]


    return (
        <div className='flex justify-center items-center'>
            {
                images.map((image, index) =>
                {
                    return (
                        <div className='w-full border-5 border-black'
                        key={index}>
                            <Image key={index}
                            src={image.url}
                            alt={image.name}
                            width={300}
                            height={80}
                            className='w-50 h-90 object-cover'
                            />
                        </div>
                    )
                })
            }

            {/* <Image src={images[0].url}
            alt='fwew'
            width={200}
            height={200}
            className='object-cover'/> */}
        </div>
    )
}