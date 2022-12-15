import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Badges } from '../components/Badges'
import { Banner } from '../components/Banner'
import { ParsedUrlQuery } from 'querystring'
import GridList from '../components/gridlist'
import { Coin } from '../components/rivecomponents/Coin'
import { Rocket } from '../components/rivecomponents/Rocket'
import Shell from '../components/shell'
import Table, { TableRow } from '../components/table'
import Timeline from '../components/timeline'

export default function Dashboard() {


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

// type DashBoardData = {
//   data: any;
// }

// export const getServerSideProps: GetServerSideProps<{ data: DashBoardData }> = async (context) => {
//   const res = await fetch('https://.../data')
//   const data: DashBoardData = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }