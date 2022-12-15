import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image'
import GridList, { GridListItem } from '../components/gridlist'
import { Coin } from '../components/rivecomponents/Coin'
import { Rocket } from '../components/rivecomponents/Rocket'
import Shell from '../components/shell'
import Table, { TableRow } from '../components/table'
import Timeline from '../components/timeline'

export default function Transactions() {

    //todo: create timeline events from api
    // map transaction to content,
    // map donated amount to target.

  const timelineevents = [
    {
      id: 1,
      content: 'Spent £5.79, donating: ',
      target: '£0.21',
      href: '#',
      date: 'Dec 5',
      datetime: '2021-12-05',
      icon: Coin,
      iconBackground: 'bg-gray-400',
    },
    {
      id: 2,
      content: 'Spent £105.24, donating: ',
      target: '£0.76',
      href: '#',
      date: 'Dec 12',
      datetime: '2021-12-12',
      icon: Coin,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      content: 'Spent £12.35, donating: ',
      target: '£0.65',
      href: '#',
      date: 'Dec 14',
      datetime: '2021-12-14',
      icon: Coin,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Spent £9.99, donating: ',
      target: '£0.01',
      href: '#',
      date: 'Dec 15',
      datetime: '2021-12-15',
      icon: Coin,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'Spent £3.20, donating: ',
      target: '£0.80',
      href: '#',
      date: 'Dec 15',
      datetime: '2021-12-15',
      icon: Coin,
      iconBackground: 'bg-green-500',
    },
  ]

  const lastSixMonths: GridListItem[] = [
    {
        title: '£36.21 Donated!',
        subtitle: "10 day 🔥",
        bgColor: 'bg-dono-green',
        boxLetters: 'NOV',
    },
    {
        title: '£36.21 Donated!',
        subtitle: "10 day 🔥",
        bgColor: 'bg-dono-green',
        boxLetters: 'OCT',
    },
    {
        title: '£36.21 Donated!',
        subtitle: "10 day 🔥",
        bgColor: 'bg-dono-green',
        boxLetters: 'SEP',
    },
    {
        title: '£36.21 Donated!',
        subtitle: "10 day 🔥",
        bgColor: 'bg-dono-green',
        boxLetters: 'AUG',
    },
    {
        title: '£36.21 Donated!',
        subtitle: "10 day 🔥",
        bgColor: 'bg-dono-green',
        boxLetters: 'JUL',
    },
    {
        title: '£36.21 Donated!',
        subtitle: "10 day 🔥",
        bgColor: 'bg-dono-green',
        boxLetters: 'JUN',
    },
  ]


  return (
    <>
        <Shell title={"Transactions"}>
            <div className='pt-6'>
              <div className='pb-12'>
                <GridList title='Last 6 Months' data={lastSixMonths} />
              </div>
              <h2 className="text-sm font-medium text-gray-500 mb-3">This Month</h2>
              <Timeline events={timelineevents.reverse()}/>
            </div>
        </Shell>
    </>
  )
}