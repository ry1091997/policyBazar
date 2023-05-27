//import liraries
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useDispatch} from 'react-redux';
import getUSerData from '../Common/service';
import {widthToDp} from '../Responsive/responsive';
import * as Config from '../Common/config';
import CommonHeader from '../Components/header';
import CustomModal from '../Components/CustomModal';
import DetailsPage from './detailsPage';
import ListComponent from '../Components/listComponent';
import Toast from 'react-native-simple-toast';

// create a component
const DataList = () => {
  let [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const [details, setDetailsData] = useState();
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  let pageNo = useRef(1);
  let perPageData = useRef(5);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Hello world ==>useEffect');
    async function fetchData() {
      await dataFetch();
    }
    fetchData();
  }, []);
  async function dataFetch(showLoadMore) {
    try {
      let temp;
      let res = await getUSerData(pageNo.current, perPageData.current);
      if (!res?.data?.data.length) {
        Toast.show(Config?.api_loading_message, Toast.SHORT, styles.toastStyle);
      } else {
        if (showLoadMore) {
          temp = [...data, ...res?.data?.data];
        } else {
          temp = res?.data?.data;
        }
        dispatch({type: 'AddUser', payload: temp});
        setData(temp);
        console.log('data from response', temp);
      }
    } catch (e) {
      console.warn('error when Data Fetch', e);
    }
  }
  const ItemSeparatorComponent = () => (
    <View style={styles.ItemSeparatorComponent} />
  );

  const modalHandle = item => {
    setModal(true);
    setDetailsData(item);
  };

  function renderItem({item, index}) {
    return <ListComponent item={item} onPress={() => modalHandle(item)} />;
  }
  const ListHeaderComponent = () => {
    return (
      <View
        style={{
          width: widthToDp(90),
          marginVertical: widthToDp(2),
          justifyContent: 'center',
          borderRadius: widthToDp(3),
          overflow: 'hidden',
          alignItems: 'center',
        }}>
        <CommonHeader
          text="List of All  Users"
          backGroundStyle="#1e566d"
          textStyle={{
            color: '#fff',
            fontSize: widthToDp(5.5),
            fontWeight: 'bold',
          }}
        />
      </View>
    );
  };

  const onRefresh = async () => {
    setRefreshing(true);
    pageNo.current = 1;
    setData([]);
    await dataFetch();
    setRefreshing(false);
  };

  const handleLoadMore = async () => {
    if (load) {
      pageNo.current = pageNo.current + 1;
      await dataFetch(this);
    }
    setLoad(false);
  };
  const renderFooter = () => {
    if (!load) {
      return null;
    }
    console.log('ActivityINdicator');
    return <ActivityIndicator color={Config.loadingColor} size="large" />;
  };
  return (
    <View style={styles.container}>
      <View style={{marginBottom: widthToDp(2), alignItems: 'center'}}>
        <View>
          <FlatList
            data={data}
            extraData={data}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
            onEndReachedThreshold={0.4}
            onMomentumScrollEnd={() => setLoad(true)}
            onEndReached={handleLoadMore}
            ListHeaderComponent={ListHeaderComponent}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            keyExtractor={(item, index) => String(index)}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[Config.loadingColor]}
              />
            }
          />
        </View>
        {modal ? (
          <View style={styles.container}>
            <CustomModal
              onRequestClose={() => setModal(!modal)}
              modalVisible={modal}>
              {/* <CommonHeader showImage={true} backGroundStyle="#1e566d" /> */}
              <DetailsPage userId={details.id} />
            </CustomModal>
          </View>
        ) : null}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacityStyle: {
    flexDirection: 'row',
    width: widthToDp(90),
    borderRadius: widthToDp(2),
    backgroundColor: Config.themeBgcolor,
  },
  toastStyle: {
    backgroundColor: 'red',
  },
  ItemSeparatorComponent: {marginVertical: widthToDp(2)},
});

//make this component available to the app
export default DataList;
