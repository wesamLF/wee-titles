// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { MoreHorizontal } from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VideoData = {
  title: string,
  channleName: string,
  videoLink: string,
  views: string,
  channleLink: string

}

export const columns: ColumnDef<VideoData>[] = [
  {
    accessorKey: "title",
    header: () => <div className=" font-bold text-xs md:text-base">Title</div>,
    cell: ({ row }) => {
      const title = new String(row.getValue("title"))
      return <div className=" cursor-pointer font-medium hover:text-gray-600">{title}</div>
    },

  },
  {
    accessorKey: "channleName",
    header: () => <div className=" font-bold text-xs md:text-base">Channel Name</div>,
    cell: ({ row }) => {
      const channleName = new String(row.getValue("channleName"))
      return <div className="text-blue-500 cursor-pointer font-medium hover:text-black">{channleName}</div>
    },
  }, {
    accessorKey: "channleLink",
    header: () => "channleLink"
  },
  {
    accessorKey: "views",
    header: () =>  <div className="text-xs md:text-base">Views</div>,
  },
  {
    accessorKey: "videoLink",
    header: () => "videoLink",

  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const vid = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(vid.channleLink)}
  //           >
  //             Generate Title base on this video
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>Summery about this video</DropdownMenuItem>

  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]
