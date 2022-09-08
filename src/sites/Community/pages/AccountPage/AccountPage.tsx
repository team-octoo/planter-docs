import { FC, PropsWithChildren, useState } from 'react';
import { Icon } from '../../../../components/basics';
import BaseModule from './BaseModule';
import AccountOverviewModule from './modules/AccountOverviewModule';
import UserNameModule from './modules/UserNameModule';

interface Props extends PropsWithChildren {};

const AccountPage: FC<Props> = ({ children }) => {
    const [ openSection, setOpenSection ] = useState<{ group: number, module: number } | null>(null);
    
    const moduleGroups = [
        {
            name: 'Account',
            description: 'Account details and settings',
            icon: 'user',
            modules: [
                {
                    label: 'Overview',
                    render: <>Current user data</>,    
                    collapse: false,
                },
                {
                    label: 'Authentication',
                    description: 'Change or reset your password',
                    render: <AccountOverviewModule />,    
                    collapse: true,     
                },
            ]
        },
        {
            name: 'Profile',
            description: 'User account details and settings',
            icon: 'account-pin-circle',
            modules: [
                {
                    label: 'Username',
                    description: 'Changing your username is not possible for now',
                    render: <UserNameModule />,    
                    collapse: false,
                },
                {
                    label: 'Discoverability',
                    description: 'Chose wether other users can view your profile',
                    render: <AccountOverviewModule />,    
                    collapse: true,     
                },
            ]
        },
        {
            name: 'Flavours',
            description: 'Manage settings for your flavours',
            icon: 'folders',
            modules: [
                {
                    label: 'Setting 1',
                    description: 'Lorem ipsum dolor sit amet.',
                    render: <>Setting module</>,    
                    collapse: true,
                },
                {
                    label: 'Settting 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    render: <>Setting module</>,    
                    collapse: true,     
                },
            ]
        },
        {
            name: 'Advanced',
            description: 'More settings. Not recommended for normal use.',
            icon: 'flashlight',
            modules: [
                {
                    label: 'Privacy',
                    description: 'Privacy related preferences',
                    render: <>Current user data</>,    
                    collapse: true,
                },
                {
                    label: 'Danger zone',
                    description: 'Possible destructive actions',
                    render: <>Setting module</>,    
                    collapse: true,     
                },
            ]
        },
    ]
    
    const handleCollapse = ([clickedGroupIndex, clickedSectionIndex]: [number, number]) => {
        setOpenSection((current) => {
            if (current?.group === clickedGroupIndex && current?.module === clickedSectionIndex) {
                return null
            } else {
                return {
                    group: clickedGroupIndex,
                    module: clickedSectionIndex
                }
            }
        })
    }
    
    return (
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-medium mb-1">Account</h2>
                <h3 className="text-lg font-medium text-stone-500">Profile and preferences</h3>
            </div>
            <hr className="my-8" />
            {
                moduleGroups.map((group, groupElementIndex) => (
                    <div 
                        key={ groupElementIndex }
                        className="grid grid-cols-12 gap-x-6 py-6 first:pt-0 last:pb-0"
                    >
                        <div className="col-span-3">
                            <Icon name={ group.icon } size="1.6rem" className="mb-2" />
                            <h4 className="text-xl font-medium">{ group.name }</h4>
                            <h5 className="font-medium text-stone-600">{ group.description }</h5>
                        </div>
                        
                        <div className="col-span-9 border border-stone-200 bg-white rounded-lg group-target:shadow-smooth transition-all ease-linear duration-300 delay-150">
                            { group.modules.map((module, moduleElementIndex ) => (
                                <BaseModule 
                                    module={ module } 
                                    open={ openSection?.group === groupElementIndex && openSection?.module === moduleElementIndex }
                                    collapse={ module.collapse }
                                    onCollapse={() => handleCollapse([groupElementIndex, moduleElementIndex])}
                                    key={ moduleElementIndex}
                                >
                                    { module.render }
                                </BaseModule>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AccountPage;