import  mongoose  from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type:mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, requred: true},
        qty: { type: Number, requred: true},
        image: { type: String, requred: true},
        price: { type: Number, requred: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        },
      },
    ],
    shippingAddress: {
        address: { type: String, requred: true},
        city: { type: String, requred: true},
        postalCode: { type: String, requred: true},
        country: { type: String, requred: true},
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "Paypal",
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    delieveredAt: {
        type: Date,
    },
    
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", userSchema)

export default Order;