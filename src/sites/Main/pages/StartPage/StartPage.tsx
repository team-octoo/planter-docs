import { FC } from 'react';
import { Button, Icon } from '../../../../components/basics';
import CenteringLayout from '../../../../components/layouts/CenteringLayout';

interface Props {};

const StartPage: FC<Props> = () => {
    return (
        <div className="py-12 h-full flex flex-col gap-y-16">
            <div className="flex flex-col justify-center h-1/2">
                <Icon name="seedling" size="2rem" className="mx-auto mb-1" />
                <h1 className="text-center text-3xl font-semibold">React(ive) Planter</h1>
                <h2 className="text-center text-2xl text-stone-700 font-medium mb-2">Uncluttered reactive projects</h2>
                <h3 className="text-center text-stone-600 text-lg">One tool to logically initiate and expand all your projects</h3>
            </div>
            <div className="flex-1 flex divide-x-2 h-1/2">
                <div className="flex-1 pr-8 flex flex-col justify-center">
                    <div className="mb-6">
                        <Icon name="flashlight" size="2rem" className="mx-auto mb-1" />
                        <h3 className="text-center text-2xl font-semibold">Ready? Set, go!</h3>
                        <h4 className="text-center text-stone-600 text-lg">Project setup in a few steps</h4>
                    </div>
                
                    <div className="mb-4">
                        <div className="border border-stone-300 p-3 rounded-lg bg-stone-100 text-stone-600 w-fit min-w-[25vw] mx-auto">
                            <Icon name="arrow-right-s" size="1rem" className="text-stone-400 inline-block mr-2" />npm install -g react-planter <br/>
                            <Icon name="arrow-right-s" size="1rem" className="text-stone-400 inline-block mr-2" />npx create-react-app my-app <br/>
                            <Icon name="arrow-right-s" size="1rem" className="text-stone-400 inline-block mr-2" /><strong className="font-medium text-stone-700">planter init</strong>
                        </div>
                    </div>
                
                    <Button icon="arrow-right" className="mx-auto mt-4">Quick start</Button>
                </div>
                <div className="flex-1 pl-8 flex flex-col justify-center">
                    <Icon name="group-2" size="2rem" className="mx-auto mb-1" />
                    <h3 className="text-center text-2xl font-semibold">Join our community</h3>
                    <h4 className="text-center text-stone-600 text-lg">Find others' configurations or share your own</h4>
                    <Button icon="arrow-right" className="mx-auto mt-4">Start contributing</Button>
                </div>
            </div>
        </div> 
    )
}

export default StartPage;