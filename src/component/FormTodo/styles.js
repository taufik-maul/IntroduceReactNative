import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  field: {
    padding: 10,
    flex: 1,
  },
  fieldGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#777',
    paddingHorizontal: 0,
    paddingVertical: 5
  },
});

export default style;
