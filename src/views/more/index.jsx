
import RoomItem from '@/components/room-item'
import { fetchMoreAction } from '@/store/modules/more/actionCreators'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import MoreFilter from './c-cpns/more-filter'
import { MoreWrapper } from './style'
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom'
import { changeInfoAction } from '@/store/modules/detail'
import { changeConfigAction } from '@/store/modules/main'
const More = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { roomList, totalCount, pagination, loading } = useSelector((state) => {
    return {
      roomList: state.more.roomList,
      totalCount: state.more.totalCount,
      pagination: state.more.pagination,
      loading: state.more.loading
    }
  }, shallowEqual)
  const [page, setPage] = useState(pagination)
  useEffect(() => {
    dispatch(fetchMoreAction())
    dispatch(changeConfigAction({ isFixed: true }))
  }, [dispatch])

  const goDetailPage = useCallback((info) => {
    dispatch(changeInfoAction(info))
    navigate('/detail')
  }, [navigate, dispatch])
  return (
    <MoreWrapper>
      <h2 className='title'>{`共找到${totalCount}多处房源`}</h2>
      <MoreFilter />
      <div className="room">
        {
          roomList.map(item => {
            return <RoomItem width="20%" itemData={item} key={item._id} itemClick={goDetailPage} />
          })
        }
        {loading && <div className="cover"></div>}
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          current={page}
          total={totalCount}
          showSizeChanger={false}
          onChange={changePagination}
          pageSize={20}
        />
        <div className='text'>
          {`第${(page - 1) * 20 + 1}-${(page) * 20}个房源，共${totalCount}个`}
        </div>
      </div>
    </MoreWrapper>
  )
  function changePagination(page, pageSize) {
    setPage(page)
    dispatch(fetchMoreAction(page))
    window.scrollTo(0, 0)
  }

})

export default More