import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image'
import { Badges } from '../components/Badges'
import { Banner } from '../components/Banner'
import GridList from '../components/gridlist'
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
      icon: UserIcon,
      iconBackground: 'bg-gray-400',
    },
    {
      id: 2,
      content: 'Advanced to phone screening by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 22',
      datetime: '2020-09-22',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      content: 'Completed phone screening with',
      target: 'Martha Gardner',
      href: '#',
      date: 'Sep 28',
      datetime: '2020-09-28',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Advanced to interview by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 30',
      datetime: '2020-09-30',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'Completed interview with',
      target: 'Katherine Snyder',
      href: '#',
      date: 'Oct 4',
      datetime: '2020-10-04',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
  ]



  return (
    <>
        <Shell title={"Welcome!"}>
          <Badges />
          <Banner title="Make a Donation" subtitle='Make a one-off donation to one of your charities to keep your streak!' color="green" buttonText='Donate Now' />
          {/* Hi There!
          <Timeline events={timelineevents}/>
          <Table columns={columns} rows={rows} />
          <GridList /> */}
        </Shell>
    </>
  )
}