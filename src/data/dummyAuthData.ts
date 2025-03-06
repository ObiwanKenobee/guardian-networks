
// Dummy user authentication data
export const dummyUsers = [
  {
    username: "admin_guardian",
    password: "SuperSecureAdmin123!",
    role: "SuperAdmin",
    mfaEnabled: true,
    publicMetadata: {
      roles: ["admin"]
    }
  },
  {
    username: "business_alpha",
    password: "BusinessPass!456",
    role: "Supplier",
    mfaEnabled: true,
    publicMetadata: {
      roles: ["business"]
    }
  },
  {
    username: "ngo_wfp",
    password: "NGOsecure789!",
    role: "NGO",
    mfaEnabled: true,
    publicMetadata: {
      roles: ["ngo"]
    }
  },
  {
    username: "driver_john",
    password: "LocalDriver123!",
    role: "LocalDistributor",
    mfaEnabled: false,
    geoFence: "Gaza, Palestine",
    publicMetadata: {
      roles: ["distributor"]
    }
  },
  {
    username: "gov_inspector",
    password: "Gov2024Secure!",
    role: "Government",
    mfaEnabled: true,
    publicMetadata: {
      roles: ["government"]
    }
  }
];

// Dashboard dummy data
export const dashboardData = {
  adminDashboard: {
    activeUsers: 154,
    pendingVerifications: 12,
    blockedAttempts: 4,
    supplyChainRisks: [
      { region: "Gaza", riskLevel: "High", expectedShortage: "Medical Supplies" },
      { region: "Sudan", riskLevel: "Medium", expectedShortage: "Food Aid" }
    ]
  },
  businessDashboard: {
    pendingOrders: 5,
    completedOrders: 12,
    totalVolume: "8,400 tons",
    contractBids: [
      { ngo: "Red Cross", bidAmount: "$500,000", status: "Pending" },
      { ngo: "UNICEF", bidAmount: "$320,000", status: "Accepted" }
    ]
  },
  ngoDashboard: {
    verifiedShipments: 27,
    disputedShipments: 3,
    realTimeShipments: [
      { id: "TXN202403", location: "Rafah Border", status: "In Transit" },
      { id: "TXN202405", location: "Khartoum", status: "Delayed" }
    ]
  },
  distributorDashboard: {
    assignedDeliveries: [
      { orderId: "ORD78234", destination: "Gaza City", status: "Delivered" },
      { orderId: "ORD89541", destination: "Ramallah", status: "In Progress" }
    ],
    messages: [
      { from: "NGO_WFP", message: "Confirm ETA for food supply." }
    ]
  },
  governmentDashboard: {
    complianceReports: [
      { id: "RPT001", title: "Q1 Aid Distribution Compliance", status: "Verified" },
      { id: "RPT002", title: "Medical Supply Chain Audit", status: "Under Review" }
    ],
    suspiciousTransactions: 3
  }
};
