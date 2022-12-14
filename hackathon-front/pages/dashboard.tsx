import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Image from 'next/image'
import GridList from '../components/gridlist'
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

  const columns = [
    'Col1',
    'Col2',
    'Col3',
    'Col4',
    'Col5',
  ]

  const rows: TableRow[] = [
    [
      {
        data: "One",
        isBold: true,
      },
      {
        data: "Two",
        isBold: false,
      },
      {
        data: "Three",
        isBold: false,
      },
      {
        data: "Four",
        isBold: false,
      },
      {
        data: "Five",
        isBold: false,
      },
    ],
    [
      {
        data: "One",
        isBold: true,
      },
      {
        data: "Two",
        isBold: false,
      },
      {
        data: "Three",
        isBold: false,
      },
      {
        data: "Four",
        isBold: false,
      },
      {
        data: "Five",
        isBold: false,
      },
    ],
    [
      {
        data: "One",
        isBold: true,
      },
      {
        data: "Two",
        isBold: false,
      },
      {
        data: "Three",
        isBold: false,
      },
      {
        data: "Four",
        isBold: false,
      },
      {
        data: "Five",
        isBold: false,
      },
    ],

  ]


  return (
    <>
        <Shell>
          <Rocket/>
          {/* Hi There!
          <Timeline events={timelineevents}/>
          <Table columns={columns} rows={rows} />
          <GridList /> */}
        </Shell>
    </>
  )
}