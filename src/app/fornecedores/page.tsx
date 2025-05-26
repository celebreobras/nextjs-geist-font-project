"use client"

import React, { useState } from "react"
import { 
  Search, 
  Plus, 
  Building2,
  Phone,
  Mail,
  MapPin,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Filter,
  ArrowUpDown
} from "lucide-react"

const sampleSuppliers = [
  {
    id: 1,
    nome: "Clean Services LTDA",
    cnpj: "00.000.000/0001-00",
    areaAtuacao: "Limpeza e Conservação",
    email: "contato@cleanservices.com",
    telefone: "(11) 99999-9999",
    endereco: "Av. Paulista, 1000 - São Paulo/SP",
    contratosAtivos: 3,
    valorTotal: "R$ 15.000,00",
    status: "Ativo",
    observacoes: "Fornecedor principal de serviços de limpeza",
  },
  {
    id: 2,
    nome: "AutoFrota Brasil",
    cnpj: "11.111.111/0001-11",
    areaAtuacao: "Locação de Veículos",
    email: "comercial@autofrota.com",
    telefone: "(11) 98888-8888",
    endereco: "Rua Augusta, 500 - São Paulo/SP",
    contratosAtivos: 2,
    valorTotal: "R$ 20.000,00",
    status: "Ativo",
    observacoes: "Frota executiva e operacional",
  },
  {
    id: 3,
    nome: "Eng Solutions",
    cnpj: "22.222.222/0001-22",
    areaAtuacao: "Consultoria em Engenharia",
    email: "contato@engsolutions.com",
    telefone: "(11) 97777-7777",
    endereco: "Av. Faria Lima, 2000 - São Paulo/SP",
    contratosAtivos: 1,
    valorTotal: "R$ 15.000,00",
    status: "Em análise",
    observacoes: "Especialista em projetos estruturais",
  },
]

export default function FornecedoresPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fornecedores</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie os fornecedores e suas informações
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3a63] transition-colors">
          <Plus className="h-5 w-5" />
          Novo Fornecedor
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar fornecedores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="">Todas as áreas</option>
            <option value="Limpeza">Limpeza</option>
            <option value="Veículos">Veículos</option>
            <option value="Engenharia">Engenharia</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Mais filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <ArrowUpDown className="h-5 w-5" />
            Ordenar
          </button>
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleSuppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-[#0f4c81] transition-colors"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {supplier.nome}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      CNPJ: {supplier.cnpj}
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
                      <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
                        <Trash2 className="h-4 w-4" />
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {supplier.endereco}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Phone className="h-4 w-4" />
                  {supplier.telefone}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Mail className="h-4 w-4" />
                  {supplier.email}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Contratos Ativos</p>
                    <p className="font-medium text-gray-900">{supplier.contratosAtivos}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Valor Total</p>
                    <p className="font-medium text-gray-900">{supplier.valorTotal}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      supplier.status === "Ativo" 
                        ? "bg-green-50 text-green-700" 
                        : "bg-yellow-50 text-yellow-700"
                    }`}>
                      {supplier.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
