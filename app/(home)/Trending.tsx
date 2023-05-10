import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TrendingCardProps = {
    className?: string;
    post: Post;
};

interface Props {
    trendingPosts: Array<Post>;
}

const TrendingCard = ({ className, post }: TrendingCardProps) => {
    return (
        <Link
            href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
            className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
        >
            <div className='z-0 relative w-full h-full'>
                <Image
                    fill
                    src={post?.image}
                    alt='tech'
                    placeholder='blur'
                    sizes='(max-width: 480px) 100vw,
                    (max-width: 768px) 75vw,
                    (max-width: 1060px) 50vw,
                    33vw'
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual'></div>
            <div className='absolute z-2 bottom-0 left-0 p-3'>
                <h4 className='inline-block px-5 py-1 font-semibold bg-accent-orange text-sh-900'>
                    {post?.category}
                </h4>
                <div className='text-wh-100 mt-2'>{post?.title}</div>
            </div>
        </Link>
    );
};

const Trending = ({ trendingPosts }: Props) => {
    return (
        <section className='py-3 pb-10'>
            <div className='flex items-center gap-3'>
                <div className='bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold'>
                    TRENDING
                </div>
                <p className='text-sm'>
                    Uno rectum uti sui possum falsae secius vixque. Placidae
                    cognitum pluribus eo rogassem id.
                </p>
            </div>

            {/* FLEX OPTION */}
            {/* <div className='flex justify-between gap-3 my-3 '>
                <div className='basis-1/2 bg-wh-500 h-96'></div>
                <div className='flex flex-col basis-1/2  gap-3 h-96'>
                    <div className='basis-1/2 bg-wh-500'></div>
                    <div className='flex basis-1/2 gap-3'>
                        <div className='basis-1/2 bg-wh-500'></div>
                        <div className='basis-1/2 bg-wh-500'></div>
                    </div>
                </div>
            </div> */}

            {/* GRID */}
            <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
                <TrendingCard
                    className='col-span-2 row-span-2 bg-wh-500'
                    post={trendingPosts[0]}
                />
                <TrendingCard
                    className='col-span-2 row-span-1 bg-wh-500'
                    post={trendingPosts[1]}
                />
                <TrendingCard
                    className='col-span-1 row-span-1 bg-wh-500'
                    post={trendingPosts[2]}
                />
                <TrendingCard
                    className='col-span-1 row-span-1 bg-wh-500'
                    post={trendingPosts[3]}
                />
            </div>
            <p className='text-sm'>
                Item ita cui quod haec adeo ibi fato. Sae ordinem quietem
                majoris examino imo. Ob eo quum et nunc solo meos adeo alia ac.
            </p>
        </section>
    );
};

export default Trending;
