import { Inertia } from "@inertiajs/inertia";
import React, {useState} from "react"
import Layout from "../../../components/common/layout"

interface Props {
  
}

const BookmarkAddPage: React.FC<Props> = () => {
    const [state, setState] = useState({
        link: '',
        title: 'some heardcoded title'
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [event.currentTarget.name]: event.currentTarget.value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Inertia.post("/bookmark/preview", state);
    }

  return (
    <Layout>
      <div className="list-group">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="link">Link</label>
                <input type='text' name='link' className="form-control" onChange={handleChange}></input>
                <input type="submit" value="submit" />
            </div>
        </form>
      </div>
    </Layout>
  )
}

export default BookmarkAddPage
