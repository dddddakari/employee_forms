import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';

const EmployeeSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  position: Yup.string().required('Required'),
  department: Yup.string().required('Required'),
  hireDate: Yup.date().required('Required'),
  salary: Yup.number().positive('Must be positive').required('Required'),
});

const EmployeeForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Information</Text>
      
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          position: '',
          department: '',
          hireDate: '',
          salary: '',
        }}
        validationSchema={EmployeeSchema}
        onSubmit={(values) => {
          console.log(values);
          alert('Form submitted successfully!');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <MaterialIcons name="person" size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
            </View>
            {touched.fullName && errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}

            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <View style={styles.inputContainer}>
              <MaterialIcons name="work" size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Position"
                onChangeText={handleChange('position')}
                onBlur={handleBlur('position')}
                value={values.position}
              />
            </View>
            {touched.position && errors.position && (
              <Text style={styles.errorText}>{errors.position}</Text>
            )}

            <View style={styles.inputContainer}>
              <MaterialIcons name="business" size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Department"
                onChangeText={handleChange('department')}
                onBlur={handleBlur('department')}
                value={values.department}
              />
            </View>
            {touched.department && errors.department && (
              <Text style={styles.errorText}>{errors.department}</Text>
            )}

            <View style={styles.inputContainer}>
              <MaterialIcons name="date-range" size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Hire Date (YYYY-MM-DD)"
                onChangeText={handleChange('hireDate')}
                onBlur={handleBlur('hireDate')}
                value={values.hireDate}
              />
            </View>
            {touched.hireDate && errors.hireDate && (
              <Text style={styles.errorText}>{errors.hireDate}</Text>
            )}

            <View style={styles.inputContainer}>
              <MaterialIcons name="attach-money" size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Salary"
                onChangeText={handleChange('salary')}
                onBlur={handleBlur('salary')}
                value={values.salary}
                keyboardType="numeric"
              />
            </View>
            {touched.salary && errors.salary && (
              <Text style={styles.errorText}>{errors.salary}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d7e4fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 50,
    textAlign: 'center',
    color: '#3d557a',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3d557a',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: '#0f5bd6',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
});

export default EmployeeForm;