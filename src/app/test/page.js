'use client';

import {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';


function AnimatedDiv({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            // fire the animation
            mainControls.start('visible');
        }
    }, [isInView]);


    // style={{
    //     transform: isInView ? "none" : "translateX(-200px)",
    //         opacity: isInView ? 1 : 0,
    //         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    // }}

    // variants={{
    //     hidden: {opacity: 0, y: 75},
    //     visible: {opacity: 1, y: 0},
    // }}

    return (
        <motion.div ref={ref}
                    variants={{
                        hidden: {transform: 'translateX(-500px)', opacity: 0},
                        visible: {transform: 'translateX(0px)', opacity: 1},
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{duration: .5, delay: 0.25}}>
            {children}
        </motion.div>
    )
}


const Page = () => {
    return (
        <div className={'flex h-[5000px] flex-col bg-purple-400 w-full'}>
            <AnimatedDiv>
                <h4>Hello world</h4>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>
            <div className={'h-[500px] '}/>
            <AnimatedDiv>
                <div className={'bg-white shadow w-[300px] mx-auto rounded-xl p-5'}>
                    THis is a card
                </div>
            </AnimatedDiv>


        </div>
    );
};

export default Page;