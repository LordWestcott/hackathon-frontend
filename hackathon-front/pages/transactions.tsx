import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image'
import GridList, { GridListItem } from '../components/gridlist'
import { Coin } from '../components/rivecomponents/Coin'
import { Rocket } from '../components/rivecomponents/Rocket'
import Shell from '../components/shell'
import Table, { TableRow } from '../components/table'
import Timeline from '../components/timeline'

export default function Home() {

  const timelineevents = [
    {
      id: 1,
      content: 'Applied to',
      target: 'Front End Developer',
      href: '#',
      date: 'Sep 20',
      datetime: '2020-09-20',
      icon: Coin,
      iconBackground: 'bg-gray-400',
    },
    {
      id: 2,
      content: 'Advanced to phone screening by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 22',
      datetime: '2020-09-22',
      icon: Coin,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      content: 'Completed phone screening with',
      target: 'Martha Gardner',
      href: '#',
      date: 'Sep 28',
      datetime: '2020-09-28',
      icon: Coin,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Advanced to interview by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 30',
      datetime: '2020-09-30',
      icon: Coin,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'Completed interview with',
      target: 'Katherine Snyder',
      href: '#',
      date: 'Oct 4',
      datetime: '2020-10-04',
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
              <Timeline events={timelineevents}/>
            </div>
        </Shell>
    </>
  )
}