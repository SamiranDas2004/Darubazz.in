import { Router } from "express";
import { cancelOrder, confirmOrder, createOrderItem, orderPrice, ordersForOneSeller } from "../controllers/order.controller.js";

const orderRouter=Router()

orderRouter.route('/placeorder/:orderId').post(createOrderItem)
orderRouter.route('/cancelorder/:orderId').delete(cancelOrder)
orderRouter.route('/confirmorder/:orderId').post(confirmOrder)
orderRouter.route('/payment/:totalPrice').post(orderPrice)
orderRouter.route('/orders/:userId').post(ordersForOneSeller)

export default orderRouter