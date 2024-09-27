import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image'
  ];

  const POST_CATEGORIES = [
    "Uncategorized",
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Technology",
    "Health",
    "Science",
    "Sports",
    "Politics",
    "Travel",
    "Lifestyle",
    "Food",
    "Finance",
    "Environment",
    "Fashion",
    "Music",
    "Gaming",
    "Real Estate"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !description) {
      setErrorMessage("Title and Description are required.");
      return;
    }

    // Handle form submission logic here (e.g., API call)
    console.log({ title, category, description, thumbnail });

    // Reset form fields after submission
    setTitle("");
    setCategory("Uncategorized");
    setDescription("");
    setThumbnail(null);
    setThumbnailPreview(null);
    setErrorMessage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file)); // Create a preview URL for the selected file
    }
  };

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {errorMessage && <p className="form__error-message">{errorMessage}</p>}
        <form className="form create-post__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <ReactQuill 
            modules={modules} 
            formats={formats} 
            value={description} 
            onChange={setDescription}
          />
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept='image/png, image/jpeg'
          />
          {thumbnailPreview && (
            <div className="thumbnail-preview">
              <h4>Thumbnail Preview:</h4>
              <img src={thumbnailPreview} alt="Thumbnail preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </div>
          )}
          <button type="submit" className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
