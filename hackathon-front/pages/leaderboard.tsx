import { Fire } from "../components/rivecomponents/Fire";
import Shell from "../components/shell";
import Table, { TableRow } from "../components/table";

export default function Leaderboard() {

    //todo: map table from API call.

    const columns = [
        'User',
        'Current Streak',
        'Longest Streak',
        'Total Donated',
        '',
      ]
    
      const rows: TableRow[] = [
        [
          {
            data: "Olly F...",
            isBold: true,
          },
          {
            data: "11 Days",
            isBold: false,
          },
          {
            data: "55 Days",
            isBold: false,
          },
          {
            data: "£121.52",
            isBold: true,
          },
          {
            data: <Fire active={false} widthPx={30} heightPx={30}/>,
            isBold: false,
          },
        ],
        [
            {
              data: "Catherine M...",
              isBold: true,
            },
            {
              data: "11 Days",
              isBold: false,
            },
            {
              data: "55 Days",
              isBold: false,
            },
            {
              data: "£121.52",
              isBold: true,
            },
            {
              data: <Fire active={true} widthPx={30} heightPx={30}/>,
              isBold: false,
            },
          ],
          [
            {
              data: "Alex H...",
              isBold: true,
            },
            {
              data: "11 Days",
              isBold: false,
            },
            {
              data: "55 Days",
              isBold: false,
            },
            {
              data: "£121.52",
              isBold: true,
            },
            {
              data: <Fire active={true} widthPx={30} heightPx={30}/>,
              isBold: false,
            },
          ],
          [
            {
              data: "Louis P...",
              isBold: true,
            },
            {
              data: "11 Days",
              isBold: false,
            },
            {
              data: "55 Days",
              isBold: false,
            },
            {
              data: "£121.52",
              isBold: true,
            },
            {
              data: <Fire active={false} widthPx={30} heightPx={30}/>,
              isBold: false,
            },
          ],
        
    
      ]
    

    return (
        <>
        <Shell title="Leaderboard">
            <Table rows={rows} columns={columns} />
        </Shell>
        </>
    ) 
}