import TextField from "@material-ui/core/TextField";
import CreateField from '../components/createField';

class CreateForm extends React.Component {
  state = {
    formName: "",
    fields: []
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <form>
        <TextField
          id="form-name"
          label="Nome do Formulário"
          value={this.state.formName}
          fullWidth
          onChange={this.handleChange("formName")}
        />
        <hr />
        <CreateField></CreateField>
      </form>
    );
  }
}

export default CreateForm;
