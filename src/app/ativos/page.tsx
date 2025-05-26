"use client"

import React, { useState } from "react"
import { 
  Search, 
  Plus, 
  Filter,
  ArrowUpDown,
  Laptop,
  Car,
  Smartphone,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Upload,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle
} from "lucide-react"

const sampleAssets = [
  {
    id: 1,
    tipo: "Notebook",
    icon: Laptop,
    codigoPatrimonio: "NB-2024-001",
    contrato: "CONT-2024/001",
    responsavel: "João Silva",
    departamento: "TI",
    status: "Em uso",
    dataEntrega: "2024-01-15",
    marca: "Dell",
    modelo: "Latitude 5420",
    especificacoes: "Intel i7, 16GB RAM, 512GB SSD",
    termoEntrega: "termo_001.pdf",
    fotos: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg",
    ],
  },
  {
    id: 2,
    tipo: "Veículo",
    icon: Car,
    codigoPatrimonio: "VH-2024-001",
    contrato: "CONT-2024/002",
    responsavel: "Maria Souza",
    departamento: "Comercial",
    status: "Pendente de entrega",
    dataEntrega: null,
    marca: "Toyota",
    modelo: "Corolla 2024",
    especificacoes: "Sedan, Automático, Flex",
    termoEntrega: null,
    fotos: [],
  },
  {
    id: 3,
    tipo: "Smartphone",
    icon: Smartphone,
    codigoPatrimonio: "SP-2024-001",
    contrato: "CONT-2024/003",
    responsavel: "Pedro Santos",
    departamento: "Vendas",
    status: "Em uso",
    dataEntrega: "2024-01-20",
    marca: "Samsung",
    modelo: "Galaxy S23",
    especificacoes: "256GB, 8GB RAM",
    termoEntrega: "termo_003.pdf",
    fotos: [
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
    ],
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Em uso":
      return "text-green-700 bg-green-50"
    case "Pendente de entrega":
      return "text-yellow-700 bg-yellow-50"
    case "Devolvido":
      return "text-blue-700 bg-blue-50"
    case "Extraviado":
      return "text-red-700 bg-red-50"
    default:
      return "text-gray-700 bg-gray-50"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Em uso":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "Pendente de entrega":
      return <Clock className="h-4 w-4 text-yellow-600" />
    case "Devolvido":
      return <AlertCircle className="h-4 w-4 text-blue-600" />
    case "Extraviado":
      return <XCircle className="h-4 w-4 text-red-600" />
    default:
      return null
  }
}

export default function AtivosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTipo, setSelectedTipo] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ativos</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie os ativos vinculados aos contratos
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3a63] transition-colors">
          <Plus className="h-5 w-5" />
          Novo Ativo
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Laptop className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Notebooks</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <Car className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Veículos</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Smartphone className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Smartphones</p>
              <p className="text-2xl font-bold text-gray-900">38</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pendentes</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar ativos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedTipo}
            onChange={(e) => setSelectedTipo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="">Todos os tipos</option>
            <option value="Notebook">Notebook</option>
            <option value="Veículo">Veículo</option>
            <option value="Smartphone">Smartphone</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="">Todos os status</option>
            <option value="Em uso">Em uso</option>
            <option value="Pendente">Pendente</option>
            <option value="Devolvido">Devolvido</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Mais filtros
          </button>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleAssets.map((asset) => {
          const AssetIcon = asset.icon
          return (
            <div
              key={asset.id}
              className="bg-white rounded-lg border border-gray-200 hover:border-[#0f4c81] transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <AssetIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {asset.marca} {asset.modelo}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {asset.codigoPatrimonio}
                      </p>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:block z-10">
                      <div className="py-1">
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Ver detalhes
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                          <Edit className="h-4 w-4" />
                          Editar
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Upload de fotos
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
                          <Trash2 className="h-4 w-4" />
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Especificações:</span> {asset.especificacoes}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Responsável:</span> {asset.responsavel}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Departamento:</span> {asset.departamento}
                  </p>
                </div>

                {asset.fotos.length > 0 && (
                  <div className="mt-4 flex gap-2">
                    {asset.fotos.map((foto, index) => (
                      <img
                        key={index}
                        src={foto}
                        alt={`${asset.tipo} ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                      />
                    ))}
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(asset.status)}`}>
                    {getStatusIcon(asset.status)}
                    {asset.status}
                  </span>
                  {asset.termoEntrega && (
                    <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                      <Download className="h-4 w-4" />
                      Termo de Entrega
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
