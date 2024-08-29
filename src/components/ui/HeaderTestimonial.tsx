'use client';

import Image from "next/image";

export function TestimonialOne() {
    return (
        <section className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
                <div className="md:flex md:items-center md:justify-center md:space-x-14">
                    <div className="relative h-48 w-48 flex-shrink-0">
                        <Image
                            className="relative h-48 w-48 rounded-full object-cover"
                            src="https://media.licdn.com/dms/image/v2/C5103AQFNWEUSNsWfew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1547398777396?e=1730332800&v=beta&t=k8Uebjvdq9FQAF54-R6VGlJRDKySoei_ZW0gifRva2k"
                            alt=""
                        />
                    </div>

                    <div className="mt-10 md:mt-0 border-2 p-3 rounded-3xl shadow-2xl border-black">
                        <blockquote>
                            <p className="text-sm text-black">
                                “Priyanka knows how to get things done. From in-depth research to precise content writing, she is the perfect balance of all good things. Her dedication to her work and out of the box thinking skills are unmatchable. Her creativity and professionalism reflect clearly in her work. She has a wealth of ideas and experience that are certain to get you the results you seek. She is one of the most passionate, reliable and trustworthy people I have met in my life. I strongly recommend her for her amazing and incredible work.”
                            </p>
                        </blockquote>
                        <p className="mt-7 font-semibold text-black">Priyank Ahuja</p>
                        <p className="mt-1 text-base text-gray-600">Career Coach, Product Leader </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TestimonialOne