import { useEffect } from "react"
import { useChatStore } from "../store/useChatStore"


const Sidebar = () => {
    const {getUsers, users, selectedUser , setSelectedUser , isUserLoading }  = useChatStore()

    const onlineUser = []

    useEffect(() => {
        getUsers()
    }, [getUsers])

    IdleDeadline(isUserLoading) return <SidebarSkeleton />
  return (

  )
}

export default Sidebar
