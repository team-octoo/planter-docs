import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import useDirectus from '../../../state/hooks/useDirectus/useDirectus';
import { Release } from '../../../types/documentation/release';
import { AnimatedList, Button, Date } from '../../basics';

interface Props {};

const SideFade = tw.div`
    absolute inset-y-0 w-10 
    bg-gradient-to-r from-white to-transparent 
    z-10
    pointer-events-none
`;

const ReleaseTimeline: FC<Props> = () => {
    const { data: releases } = useDirectus<Release[]>('releases');
    
    return (
        <div className="relative bg-white border border-stone-300 pt-6 pb-8 rounded-lg max-w-7xl mx-auto overflow-hidden">
            <SideFade className="left-0" />
            <SideFade className="right-0 rotate-180" />
            
            <div className="px-8 mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-medium">Releases</h1>
                <Button icon="arrow-right">All releases</Button>
            </div>
            
            <div className="relative">
                <div className="border-t-2 border-stone-400" />
                <div className="px-8">
                    <AnimatedList className="grid grid-cols-4 gap-6">
                        { releases?.map((release, index) => (
                            <li
                                key={ index }
                                className="col-span-1 pt-4 group h-full"
                            >   
                                <div className="absolute -top-[1px] -translate-y-1/2 flex items-center">
                                    <div className="w-3 h-3 rounded-full border-2 border-stone-400 bg-white" />
                                    <span className="ml-2 px-2 bg-white text-xs font-semibold text-stone-500 rounded-full border border-stone-400 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{ release.version_number }</span>
                                </div>
                                <Link
                                    to={ '/docs/about/releases/' + release.version_number }
                                    className="h-full"
                                >
                                    <h4 className=" text-stone-600 text-xl font-semibold leading-5">{ release.title }</h4>
                                    <p className="text-stone-500 mt-2"><Date format="MMMM DD, YYYY">{ release.date_created }</Date></p>
                                </Link>
                            </li>
                        ))}
                    </AnimatedList>
                </div>
            </div>
        </div>
    )
}

export default ReleaseTimeline;