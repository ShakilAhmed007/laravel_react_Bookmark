import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import route from "ziggy-js"
import Layout from "../../../components/common/layout"

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }) => {
  return (
    <Layout>
      <div className="list-group">
        {bookmarks.length > 0 &&
          bookmarks.map((bookmark, index) => {
            return (
              <li className="list-group-item" key={index}>
                <h5><InertiaLink href={route('bookmark.view', {bookmark: bookmark.id})}>{bookmark.title}</InertiaLink></h5>
                <p>{bookmark.description}</p>

              </li>
            )
          })}
      </div>
    </Layout>
  )
}

export default BookmarkListPage
