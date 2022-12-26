import styled from "styled-components";


export const MoreWrapper = styled.div`
.title{
    font-weight: bold;
    padding-left:30px;
    padding-top:10px;
}
 .room{
    position: relative;
    display:flex;
    flex-wrap:wrap;
    width:100%;
    padding:40px 20px;
    >.cover{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background:rgba(255,255,255,.8);
        object-fit: fill;
    }
    
 }
 .pagination{
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top:10px;
    .text{
        margin-top:10px;
    }
    .ant-pagination-item{
        border-radius:50%;
    }
    .ant-pagination-item-active{
       
        background-color:#222222;
        a{
            color:#FFFFFF;
        }
    }
 }
`