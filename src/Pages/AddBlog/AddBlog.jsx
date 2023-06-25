import { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./AddBlog.css";

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AddBlog = () => {
  const [tags, setTags] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState("");
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setPhotos([...photos, ...selectedFiles]);
  };

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const url = form.url.value;
    console.log(title, description, url, category);
  };
  return (
    <div className="max-w-7xl mx-auto w-full mt-10 px-5">
      <h2 className="text-4xl font-bold text-blue-600">Add Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Technology Category</span>
            </label>
            <select
              onChange={(event) => setCategory(event.target.value)}
              className="select select-bordered"
            >
              <option selected>Web Developer</option>
              <option>Graphic Designer</option>
              <option>Digital Marketing</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold">Images</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div className="form-control w-full mt-5">
          <label className="label-text mb-2">
            <span className="label-text font-bold">Tags</span>
          </label>
          <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="inline"
            autocomplete
            editable
          />
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Demo Site Link</span>
            </label>
            <input
              type="url"
              placeholder="Type here"
              className="input input-bordered w-full "
              name="url"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            name="description"
            required
          ></textarea>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Add Portfolio"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
