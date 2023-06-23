import {StyleSheet} from 'react-native';

export const jobListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    padding: 10,
    margin: 2,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  company: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
  },
  location: {
    fontSize: 14,
    fontWeight: '400',
  },
  level: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    color: "teal"
  },
});
