import Shell from "../components/shell";
import Table, { TableRow } from "../components/table";

export default function Leaderboard() {

    //todo: map table from API call.

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
        <Shell title="Leaderboard">
            <Table rows={rows} columns={columns} />
        </Shell>
        </>
    ) 
}