"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary-foreground">ModernSite</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#inicio"
                className="text-primary-foreground hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-primary-foreground hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-primary-foreground hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-primary-foreground hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-accent-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            <a
              href="#inicio"
              className="text-primary-foreground hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-primary-foreground hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-primary-foreground hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-primary-foreground hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
