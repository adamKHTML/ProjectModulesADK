<?php

namespace App\Controller\API;

use App\Entity\Module;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api')]
class ModuleController extends AbstractController
{
    #[Route('/modules', name: 'app_module', methods: ['GET'])]
    public function index(EntityManagerInterface $em): JsonResponse
    {
        // Récupère tous les modules
        $modules = $em->getRepository(Module::class)->findAll();

      
        $modulesArray = array_map(function(Module $module) {
            return [
                'id' => $module->getId(),
                'title' => $module->getTitle(),
                'description' => $module->getDescription(),
                'createdAt' => $module->getCreatedAt()?->format('Y-m-d') 
            ];
        }, $modules);

        
        return new JsonResponse(['modules' => $modulesArray]);
    }
}
