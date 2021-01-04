import PropTypes from 'prop-types';

const AddPostForm = ({ handleAddPost, isLoading, errors }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const fields = event.target;
    handleAddPost({
      title: fields.title.value,
      content: fields.content.value,
      link: fields.link.value ? fields.link.value : '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input type="text" id="link" name="link" />
      </div>
      {errors && errors.link && (
        <div className="terminal-alert terminal-alert-error">
          {errors.link.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="password">Title (*)</label>
        <input type="text" id="title" name="title" required={true} />
      </div>
      {errors && errors.title && (
        <div className="terminal-alert terminal-alert-error">
          {errors.title.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="content">Content (*)</label>
        <textarea
          id="content"
          cols="30"
          rows="5"
          name="content"
          required={true}
        ></textarea>
      </div>
      {errors && errors.content && (
        <div className="terminal-alert terminal-alert-error">
          {errors.content.map((mes, index) => (
            <span key={index}>{mes}</span>
          ))}
          <button type="reset" className="btn btn-error">
            Retry
          </button>
        </div>
      )}

      <div className="form-group">
        <button className="btn btn-primary btn-ghost" type="submit">
          {isLoading ? 'Waiting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

AddPostForm.propTypes = {
  handleAddPost: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default AddPostForm;
