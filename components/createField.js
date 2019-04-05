import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class CreateField extends React.Component {
  state = {
    fieldType: "",
    fieldTypeList: ["Text", "Number", "Date"]
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="fieldType">Tipo de Campo</InputLabel>
          <Select
            fullWidth
            value={this.state.fieldType}
            onChange={this.handleChange}>
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {this.state.fieldTypeList.map((value, index) => {
                return <MenuItem value={index} key={index}>{value}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default CreateField;