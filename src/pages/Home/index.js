import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '256,25',
        date: '10/05/24',
        type: 0,// Zero para despesa
    },
    {
        id: 2,
        label: 'Aluguel',
        value: '3.000,25', 
        date: '09/05/24',
        type: 0,// Zero para despesa
    },
    {
        id: 3,
        label: 'Salario CLT',
        value: '30.000,25',
        date: '10/01/24',
        type: 1,// 1 para receita
    },


]
export default function Home() {
  return (
      <View style={styles.container}>
          
          <Header name={'Thiago'} />
          
          <Balance saldo="9.250,90" gastos="-527,00" />

          <Actions/>
          
          <Text style={styles.title}>Últimas Movimentações</Text>

          <FlatList
              style={styles.list}
              data={list}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Movements data={item}/> }

             
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        paddingStart: 14,
        paddingEnd: 14,
    }
});
