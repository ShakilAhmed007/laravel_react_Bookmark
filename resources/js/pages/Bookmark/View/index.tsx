import { Inertia } from "@inertiajs/inertia";
import React from "react"
import Layout from "../../../components/common/layout"

interface Props {
  bookmark: any
}

const BookmarkViewPage: React.FC<Props> = ({bookmark}) => {
const handleSave = (event: React.MouseEvent) => {
  event.preventDefault();
  Inertia.post("/bookmark/make-active", {id: bookmark.id});
}
  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
            {bookmark.title && (
                <div className="card">
                    <div className="card-header">{bookmark.title}</div>
                    <div className="card-body">
                        <p>{bookmark.url}</p>
                        <p>{bookmark.description}</p>
                        <img className='img-fluid' src={bookmark.img_url} alt={bookmark.title} />
                    </div>
                    <button className='btn btn-primary' onClick={handleSave}>save</button>
                </div>
            )}
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkViewPage
