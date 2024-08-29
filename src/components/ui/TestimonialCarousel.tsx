'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";

const data = [
  {
    index: 1,
    image: `https://media.licdn.com/dms/image/v2/D5603AQG6CxkpfQrSfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710421238790?e=1730332800&v=beta&t=gcGAETgDIMFpPP4L_HMpzcSJUP1lQAn8Vrg_QuHz9Xk`,
    review: `Priyanka is one of the most professional and disciplined people i have worked with. Her understanding of the space helped me chart out my content strategy better and helped me grow my online presence. Priyanka educated me a lot on social media management. I will highly recommend anyone working with Priyanka to boost their online presence.`,
    name: `Vishesh Jhol`,
    designation: `Head, Start-ups, PayU`,
  },
  {
    index: 2,
    image: `https://media.licdn.com/dms/image/v2/D5622AQF9yKmFQMQAjw/feedshare-shrink_1280/feedshare-shrink_1280/0/1705300498757?e=1727913600&v=beta&t=ytNMG5jT5uLuUVz2TNX1cthvscpRSi4mkm4K-c5g20c`,
    review: `Priyanka has many qualities. Among them, her ability to create viral content by understanding the pulse of the audience is definitely rare.
Priyanka has helped us with branding our products and services and has helped scale multiple client relationships with large brands in e-commerce, gaming, and FMCG through visual storytelling and creativity.
As she continues to grow and scale her agency, I hope she is able to expand and scale her teams to deliver the same level of consistency at a much larger scale and expand across geographies. I am confident that with her work ethic, natural talent, and flair for entrepreneurship, she has a very bright future ahead of her.
I wish her all the best in her endeavor and wish for her continued success in this exciting journey.`,
    name: `Sam Pant`,
    designation: `CMO at  Pantech`,
  },
  {
    index: 3,
    name: `Sanket Bolinjkar`,
    review: `Priyanka has been an absolute delight to work with since day 1. She is thoughtful, innovative and clearly spends a lot of time in research to curate relevant content pieces as per our objectives. Surely recommend her for content strategy and execution.`,
    image: `https://media.licdn.com/dms/image/v2/C4E03AQEA9xav8tdn-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1625120043288?e=1730332800&v=beta&t=3ixQL-tUoEJp8oQ_KIsWkUgH41OGjCmlYqE75l3x2w8`,
    designation: `Founder and CEO – Melange Digital `,
  },
  {
    index: 4,
    name: `Roshni Sammohi`,
    review: `Highly recommend Priyanka for LinkedIn growth. She is a valuable team member, always bringing a positive attitude and innovative ideas. Priyanka's talent in writing compelling LinkedIn content, as well as creating captivating carousel posts, has significantly contributed to the growth of my LinkedIn page. She is receptive to feedback and consistently incorporates it into her work. Her eagerness to learn and adapt showcases her dedication and passion. I wholeheartedly recommend Priyanka as a skilled and committed LinkedIn strategist.`,
    image: `https://media.licdn.com/dms/image/v2/C5603AQHrQSsBGSio2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641737749449?e=1730332800&v=beta&t=TlLBJb6MtGKHdt5boOMuKE9DFH6_FuZI0NAoojeghds`,
    designation: `Business coach `,
  },
  {
    index: 5,
    name: `Khyati Gupta`,
    review: `I highly recommend Priyanka for her exceptional work as a ghostwriter on our recent project. Her talent for capturing the essence of our ideas and translating them into engaging written content is truly remarkable. Priyanka's ability to adapt her writing style to different genres and target audiences is commendable. She consistently delivered high-quality work within tight deadlines, showcasing her strong work ethic and dedication. Additionally, her collaborative nature and excellent communication skills made working with her a pleasure. Priyanka's professionalism and creativity make her an invaluable asset to any writing team. I wholeheartedly endorse her for any writing endeavor.`,
    image: `https://media.licdn.com/dms/image/v2/C5603AQEj96WQILD_iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652000183868?e=1730332800&v=beta&t=MzQF6TvLOXCuVBizBgKMyS49MTBYEAUHqsDtjajIoOo`,
    designation: `Personal Branding Manager `,
  },
  {
    index: 6,
    name: `Anirudh Gupta`,
    review: `I highly recommend Priyanka as an outstanding manager in our agency. Her focus on quality and ability to meet all deadlines is truly impressive. She excels at maintaining high standards, ensuring client satisfaction, and coordinating the team effectively. Priyanka's leadership style fosters collaboration and growth, making her an invaluable asset to any organization.`,
    image: `https://media.licdn.com/dms/image/v2/D4D03AQHdhHnEx3qqOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722136811719?e=1730332800&v=beta&t=jQjdyq6zB5GdGRZBC_TdcYGKkJe2mpZ7LB6IUuTiS7E`,
    designation: `Founder of The Organic Buzz`,
  },
];

function TestimonialSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 m-auto">
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.index}
              className="flex flex-col bg-blue-500 items-center gap-5 p-5 rounded-lg h-[450px] text-white overflow-y-scroll"
            >
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt="Platform10X Testimonial"
                  className="h-20 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center gap-2 p-2 rounded-lg">
                <p className="p-3 text-center">{item.review}</p>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm ">{item.designation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
