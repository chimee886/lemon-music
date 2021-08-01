import AlbumList from './src/album-list';

/* istanbul ignore next */
AlbumList.install = function install(Vue) {
  Vue.component(AlbumList.name, AlbumList);
};

export default AlbumList;
