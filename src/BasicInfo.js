import React, { Component, PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Field, reduxForm } from 'redux-form'
import { TextField, SelectField } from 'redux-form-material-ui'

class BasicInfo  extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }
  render(){
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          component={TextField}
          label="Nickname"
          fullWidth
        />
        <Field
          name="age"
          component={SelectField}
          hintText="Age"
          floatingLabelText="Age"
          fullWidth
        >
          <MenuItem value={1} primaryText="12歳未満" />
          <MenuItem value={2} primaryText="12歳以上20歳未満" />
          <MenuItem value={3} primaryText="20歳以上30歳未満" />
          <MenuItem value={5} primaryText="30歳以上40歳未満" />
          <MenuItem value={6} primaryText="40歳以上50歳未満" />
          <MenuItem value={7} primaryText="50歳以上60歳未満" />
          <MenuItem value={8} primaryText="60歳以上70歳未満" />
          <MenuItem value={9} primaryText="70歳以上" />
        </Field>
        <Field
          name="gender"
          component={SelectField}
          label="Gender"
          fullWidth
        >
          <MenuItem value={1} primaryText="男" />
          <MenuItem value={2} primaryText="女" />
        </Field>
        <Field
          name="nationality"
          component={SelectField}
          label="Nationality"
          fullWidth
        >
          <MenuItem value={1} primaryText="日本" />
          <MenuItem value={2} primaryText="米国" />
        </Field>
        <Field
          name="habitat"
          component={SelectField}
          label="Habitat"
          fullWidth
        >
          <MenuItem value={1} primaryText="日本" />
          <MenuItem value={2} primaryText="韓国" />
        </Field>
        <Field
          name="interest"
          component={SelectField}
          label="Interest"
          fullWidth
        >
          <MenuItem value={1} primaryText="food" />
          <MenuItem value={2} primaryText="travel" />
        </Field>
        <Field
          name="nativelanguage"
          component={SelectField}
          label="Nativelanguage"
          fullWidth
        >
          <MenuItem value={1} primaryText="japanese" />
          <MenuItem value={2} primaryText="english" />
        </Field>
        <Field
          name="languageskill"
          component={SelectField}
          label="LanguageSkill"
          fullWidth
        >
          <MenuItem value={1} primaryText="japanese" />
          <MenuItem value={2} primaryText="english" />
        </Field>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  //const requiredFields = [ 'name', 'email', 'driver', 'when' ]
  //requiredFields.forEach(field => {
    //if (!values[ field ]) {
      //errors[ field ] = 'Required'
    //}
  //})
  //if (values.pizzas > 15) {
    //errors.pizzas = 'Are you mad?'
  //}
  //if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //errors.email = 'Invalid email address'
  //}
  return errors
}

        //{this.props.children}
export default reduxForm({
  form: 'RegistForm',
  initialValues: {
    //delivery: 'delivery',
    //name: 'Jane Doe'
  },
  validate,
  //destroyOnUnmount: false,
})(BasicInfo)
